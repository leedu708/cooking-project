class UserConfig < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :admin, :boolean, null: false
    add_column :users, :username, :string, null: false
  end
end
