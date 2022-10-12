function ResponsePetition (req) {
    const Data = req.query;
    return {req : req.query};
}

exports.ResponsePetition = ResponsePetition;