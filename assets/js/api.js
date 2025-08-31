async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/RafaeltiMoreira/desafio-portfolio-dio/refs/heads/main/data/data.json';
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}