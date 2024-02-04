import * as React from 'react';


function Validation(values) {
  const errors ={}
  if (values.name === ""){
    errors.name ="Name is Required!";

}
if (values.option === ""){
  errors.option ="Name is Required!";

}
if (values.Debutconge === ""){
  errors.Debutconge ="Name is Required!";

}
if (values.FinConges === ""){
  errors.FinConges ="Name is Required!";

}
return errors;
}

export default Validation;