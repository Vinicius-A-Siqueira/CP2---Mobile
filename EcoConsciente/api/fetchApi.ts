export const fetchAirQuality = async (city: string) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.error.message || 'Falha ao buscar dados');
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    }
  };
  