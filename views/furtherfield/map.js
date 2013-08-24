function(doc) {
  if (doc.show=='furtherfieldgallery') {
      emit(doc.author, {
          id : doc._id,
          title: doc.title,
          url : doc.url,
          author: doc.author,
          homepage_url : doc.homepage_url,
          description : doc.description,
          created_at : doc.created_at,
          tags : doc.tags
      });
  }  
}