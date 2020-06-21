json.articles @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )

  json.photo article.image.attached? ? article.image_base64 : nil

  json.creator do
    json.avatar article.creator.avatar.attached? ? article.creator.avatar_base64 : nil
    json.name   article.creator.name.presence || article.creator.login_id
  end

  json.current_user_like article.likes.find{|like| like.user_id == Current.user.id }.present?

  json.likes article.likes do |like|
    json.avatar like.user.avatar.attached? ? like.user.avatar_base64 : nil
    json.name   like.user.name.presence || like.user.login_id
  end
end
