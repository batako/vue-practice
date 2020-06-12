json.articles @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )

  json.image_url url_for(article.image)

  json.creator do
    json.email article.creator.email
  end
end
