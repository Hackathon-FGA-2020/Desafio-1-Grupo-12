export default async function Request(url, method){
  const response = await fetch(url,{ method
  }).then(response => {
    return response.json()
  })

  return response;
}
