class BobaSerializer < ActiveModel::Serializer
  attributes :id, :name, :flavor
  has_many :ingredients
end
