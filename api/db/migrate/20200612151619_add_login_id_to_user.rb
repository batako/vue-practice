class AddLoginIdToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :login_id, :string, null: false
    add_index :users, :login_id, unique: true
  end
end
