import React, { useRef, useEffect, Component } from 'react';
import { TextInput, TextInputProps } from 'react-native';

const AutoFocusTextInput = (props: TextInputProps) => {
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.focus) {
        ref.current.focus();
      }
    }
  }, [ref.current]);

  return <TextInput ref={ref} {...props} />;
}


// function compose(JSX.Element) {
//   const ref = useRef<TextInput>(null);

//   useEffect(() => {
//     if (ref.current) {
//       if (ref.current.focus) {
//         ref.current.focus();
//       }
//     }
//   }, [ref.current]);


//   return element;
// }

export default AutoFocusTextInput;