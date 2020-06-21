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

  json.current_user_like article.likes.find{|like| like.user_id == Current.user.id }.present?

  json.likes article.likes do |like|
    json.avatar like.user.avatar.attached? ? url_for(like.user.avatar) : nil
    json.name   like.user.name.presence || like.user.login_id
  end
end
