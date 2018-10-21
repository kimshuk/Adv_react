const Query = {
  dogs(parent, arguments, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
