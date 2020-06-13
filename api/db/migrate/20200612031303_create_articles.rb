class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.integer :created_by, null: false

      t.timestamps
    end
  end
end
