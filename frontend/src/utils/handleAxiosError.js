export default function handleAxiosError(error) {
  if (error.response) {
    // The request was made, and the server responded with a non-2xx status code
    // You can extract error details from the response.
    const status = error.response.status;
    const data = error.response.data;

    if (data && data.message) {
      return `Request failed with status ${status}: ${data.message}`;
    } else {
      return `Request failed with status ${status}`;
    }
  } else if (error.request) {
    // The request was made, but no response was received (e.g., network error)
    return 'No response received from the server. Check your internet connection.';
  } else {
    // Something else happened while setting up the request
    return 'An error occurred while processing the request.';
  }
}