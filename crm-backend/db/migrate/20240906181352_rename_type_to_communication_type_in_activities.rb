class RenameTypeToCommunicationTypeInActivities < ActiveRecord::Migration[7.1]
  def change
    rename_column :activities, :type, :communication_type
  end
end
