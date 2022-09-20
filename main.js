function klikk()
{
let szam=parseFloat(document.getElementById('suly').value / (document.getElementById('magas').value/100)**2).toFixed(1);

document.getElementById('bmi').innerHTML = szam;


if(szam<parseFloat(18,5))
{
    document.getElementById('elso').style.backgroundColor = "orange"
    document.getElementById('masodik').style.backgroundColor = "white"
    document.getElementById('harmadik').style.backgroundColor = "white"
    document.getElementById('negyedik').style.backgroundColor = "white"
    document.getElementById('otodik').style.backgroundColor = "white"
    document.getElementById('hatodik').style.backgroundColor = "white"
}else if(szam<25)
{
    document.getElementById('elso').style.backgroundColor = "white"
    document.getElementById('masodik').style.backgroundColor = "orange"
    document.getElementById('harmadik').style.backgroundColor = "white"
    document.getElementById('negyedik').style.backgroundColor = "white"
    document.getElementById('otodik').style.backgroundColor = "white"
    document.getElementById('hatodik').style.backgroundColor = "white"
}

else if(szam < 30)
{
    document.getElementById('elso').style.backgroundColor = "white"
    document.getElementById('masodik').style.backgroundColor = "white"
    document.getElementById('harmadik').style.backgroundColor = "orange"
    document.getElementById('negyedik').style.backgroundColor = "white"
    document.getElementById('otodik').style.backgroundColor = "white"
    document.getElementById('hatodik').style.backgroundColor = "white"
}

else if(szam < 35)
{
    document.getElementById('elso').style.backgroundColor = "white"
    document.getElementById('masodik').style.backgroundColor = "white"
    document.getElementById('harmadik').style.backgroundColor = "white"
    document.getElementById('negyedik').style.backgroundColor = "orange"
    document.getElementById('otodik').style.backgroundColor = "white"
    document.getElementById('hatodik').style.backgroundColor = "white"
}

else if(szam < 40)
{
    document.getElementById('elso').style.backgroundColor = "white"
    document.getElementById('masodik').style.backgroundColor = "white"
    document.getElementById('harmadik').style.backgroundColor = "white"
    document.getElementById('negyedik').style.backgroundColor = "white"
    document.getElementById('otodik').style.backgroundColor = "orange"
    document.getElementById('hatodik').style.backgroundColor = "white"
}

else if (szam>=40){
    document.getElementById('elso').style.backgroundColor = "white"
    document.getElementById('masodik').style.backgroundColor = "white"
    document.getElementById('harmadik').style.backgroundColor = "white"
    document.getElementById('negyedik').style.backgroundColor = "white"
    document.getElementById('otodik').style.backgroundColor = "white"
    document.getElementById('hatodik').style.backgroundColor = "orange"
}

}
document.getElementById('gomb').addEventListener('click', klikk);