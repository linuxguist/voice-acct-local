function doFunction(){

// console.log(Array.from([1, 2, 3], (x) => x + '.mp3'));

    // Create an array of audio file URLs 
    // const audioFiles = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3']; 

    const audioFiles = Array.from(testi.toString().replaceAll('.', '_'), (x) => 'region/' + x + '.mp3')
     
    // Create an array to store audio elements 
    const audioElements = []; 
     
    // Create audio elements for each audio file and store them in the array 
    audioFiles.forEach(file => { 
      const audio = new Audio(file); 
      audioElements.push(audio); 
    }); 
     
    // Play the first audio file 
    audioElements[0].play(); 
     
    // Use the onended event of each audio element to play the next one 
    for (let i = 0; i < audioElements.length - 1; i++) { 
      audioElements[i].onended = () => { 
        audioElements[i + 1].play(); 
      }; 
    } 

}    
