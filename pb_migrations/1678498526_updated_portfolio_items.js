migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2u51bfddb2ldtu")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2u51bfddb2ldtu")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
