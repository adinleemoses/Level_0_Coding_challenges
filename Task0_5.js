function areaOfTri(s1, s2, s3) {
    var sP;

    sP = (s1 + s2 + s3) / 2;
    
    return Math.sqrt(sP * (sP - s1) * (sP - s2) * (sP - s3))

}

//console.log(areaOfTri(3, 4, 5));