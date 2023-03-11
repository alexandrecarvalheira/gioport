migrate((db) => {
  const collection = new Collection({
    "id": "q2u51bfddb2ldtu",
    "created": "2023-03-11 01:33:13.554Z",
    "updated": "2023-03-11 01:33:13.554Z",
    "name": "portfolio_items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z5xkulaa",
        "name": "headline",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rigqqk4p",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ngf6qawa",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/vnd.mozilla.apng",
            "image/jpeg",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q2u51bfddb2ldtu");

  return dao.deleteCollection(collection);
})
