const mMass= 78;
const mHeight=1.69;

const jMass=92;
const jHeight=1.95;

let markHigherBMI=false;
const m_BMI= mMass/mHeight**2;

const j_BMI=jMass/jHeight**2;

if(m_BMI>j_BMI){
    markHigherBMI=true;
    console.log(m_BMI);
}else{
    console.log(j_BMI);
}