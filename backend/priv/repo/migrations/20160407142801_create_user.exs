defmodule Firestorm.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :encrypted_password, :string, null: false
      add :username, :string

      timestamps
    end

    create unique_index(:users, [:username])
  end
end
