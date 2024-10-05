class ApiClient {
  private static baseUrl: string = "http://localhost:3000/api";

  // Get token from localStorage
  private static getToken(): string | null {
    return localStorage.getItem("token");
  }

  // Common headers
  private static getHeaders(): Headers {
    const token = this.getToken();
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    return headers;
  }

  // GET request
  public static async get(endpoint: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "GET",
        headers: this.getHeaders(),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Server error");
      }

      return result;
    } catch (error) {
      console.error("GET request failed", error);
      return {
        success: false,
        message: (error as Error)?.message || "Server error",
      };
    }
  }

  // POST request
  public static async post(endpoint: string, data: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Server error");
      }

      return result;
    } catch (error) {
      console.error("POST request failed", error);
      return {
        success: false,
        message: (error as Error)?.message || "Server error",
      };
    }
  }
}

export default ApiClient;
