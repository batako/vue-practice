json.articles @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )

  json.image_url article.image.attached? ? url_for(article.image) : nil

  json.creator do
    json.image_url article.creator.avatar.attached? ? url_for(article.creator.avatar) : nil
    json.email     article.creator.email
  end
end
