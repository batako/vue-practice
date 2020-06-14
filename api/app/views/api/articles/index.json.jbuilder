json.articles @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )

  json.photo article.image.attached? ? url_for(article.image) : nil

  json.creator do
    json.avatar article.creator.avatar.attached? ? url_for(article.creator.avatar) : nil
    json.name   article.creator.name.presence || article.creator.login_id
  end
end
