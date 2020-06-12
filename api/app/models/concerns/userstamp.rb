module Userstamp
  extend ActiveSupport::Concern

  included do
    if self.column_names.include?('created_by')
      belongs_to :creator,
                 class_name:  'User',
                 foreign_key: :created_by,
                 optional:    true

      before_create :set_creator
    end

    if self.column_names.include?('updated_by')
      belongs_to :updator,
                 class_name:  'User',
                 foreign_key: :updated_by,
                 optional:    true

      before_create :set_updator
    end
  end


  def set_creator
    self.creator = Current.user
    set_updator if self.class.column_names.include?('updated_by')
  end


  def set_updator
    self.updator = Current.user
  end
end
