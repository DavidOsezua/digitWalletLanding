/**
 * Geolocation service to check user's country based on IP address
 * Uses ipapi.co free API (1000 requests/day limit)
 */

export interface GeolocationResponse {
  country_code: string;
  country_name: string;
  ip: string;
  error?: boolean;
  reason?: string;
}

const LOCATION_STORAGE_KEY = 'user_location_check';
const BLOCKED_COUNTRY_CODE = 'GB'; // United Kingdom ISO code

/**
 * Check if user's location from the UK
 * @returns Promise with boolean indicating if user is from UK
 */
export const checkUserLocation = async (): Promise<{
  isBlocked: boolean;
  countryCode: string | null;
  error?: string;
}> => {
  try {
    // Check if we have a cached result (valid for 24 hours)
    const cachedData = localStorage.getItem(LOCATION_STORAGE_KEY);
    if (cachedData) {
      const { countryCode, timestamp } = JSON.parse(cachedData);
      const oneDayInMs = 24 * 60 * 60 * 1000;

      if (Date.now() - timestamp < oneDayInMs) {
        return {
          isBlocked: countryCode === BLOCKED_COUNTRY_CODE,
          countryCode,
        };
      }
    }

    // Fetch geolocation data from API
    const response = await fetch('https://ipapi.co/json/');

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data: GeolocationResponse = await response.json();

    // Check if API returned an error
    if (data.error) {
      throw new Error(data.reason || 'Geolocation API error');
    }

    const countryCode = data.country_code;

    // Cache the result
    localStorage.setItem(
      LOCATION_STORAGE_KEY,
      JSON.stringify({
        countryCode,
        timestamp: Date.now(),
      })
    );

    return {
      isBlocked: countryCode === BLOCKED_COUNTRY_CODE,
      countryCode,
    };
  } catch (error) {
    console.error('Geolocation check failed:', error);

    // On error, allow access (fail-open strategy)
    // Alternative: You could fail-closed by returning isBlocked: true
    return {
      isBlocked: false,
      countryCode: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Clear cached location data
 */
export const clearLocationCache = (): void => {
  localStorage.removeItem(LOCATION_STORAGE_KEY);
};
