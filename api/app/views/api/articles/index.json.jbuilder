json.articles @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )

  json.image_url article.image.attached? ? url_for(article.image) : nil

  json.creator do
    json.email article.creator.email
  end
end
