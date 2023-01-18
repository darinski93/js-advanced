function constructionCrew(obj) {


    if (obj.dizziness === true) {

        obj.levelOfHydrated += ((Number(obj.weight) * Number(obj.experience)) * 0.1)
        obj.dizziness = false
        return obj
    } else {
        return obj
    }

}
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})