/**
 * API base URL - can be overridden with REACT_APP_API_URL environment variable
 */
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://contact-api-indol.vercel.app';

/**
 * Utility function to send contact form via Vercel serverless API
 * @param {string} name - Sender's name
 * @param {string} message - Message content
 * @param {string} website - Honeypot field (should be empty for real users)
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export const sendContact = async (name, message, website = '') => {
  // Always use the full API URL (API must allow CORS from your frontend origin)
  const apiUrl = `${API_BASE_URL}/api/contact`;

  console.log('Sending contact form:', {
    apiUrl,
    origin: window.location.origin,
    payload: { name, message: message.substring(0, 50) + '...', website: website || '(empty)' }
  });

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        message: message.trim(),
        website: website.trim(),
      }),
    });

    console.log('Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      headers: Object.fromEntries(response.headers.entries())
    });

    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      let errorMessage = 'Failed to send message. Please try again later.';
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
        console.error('API error response:', errorData);
      } catch (parseError) {
        // If response is not JSON, use status text
        const text = await response.text();
        console.error('Non-JSON error response:', text);
        errorMessage = `Server error (${response.status}): ${response.statusText || 'Unknown error'}`;
      }

      console.error('API error:', {
        status: response.status,
        statusText: response.statusText,
        message: errorMessage,
        url: apiUrl,
      });

      return {
        success: false,
        error: errorMessage,
      };
    }

    const data = await response.json();
    console.log('Contact sent successfully:', data);

    return {
      success: true,
    };
  } catch (error) {
    console.error('Network error details:', {
      error: error.message,
      errorName: error.name,
      apiUrl,
      origin: window.location.origin,
      stack: error.stack,
    });

    // Provide error message
    let errorMessage = 'Network error. Please check your connection and try again.';
    
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.name === 'TypeError') {
      errorMessage = `Cannot connect to the API.\n\nPlease check:\n1. The API endpoint is correct: ${apiUrl}\n2. CORS is configured to allow requests from: ${window.location.origin}\n3. Your internet connection is working`;
    } else if (error.message.includes('CORS')) {
      errorMessage = `CORS error: The server at ${apiUrl} is not allowing requests from ${window.location.origin}.\n\nPlease ensure your API's CORS configuration includes: ${window.location.origin}`;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};

/**
 * Basic email validation regex
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
