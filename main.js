var inputSpeakBtn = document.querySelector('.btn-test-voice');
        var inputTxt = document.querySelector('#your-text');
        var voiceSelect = document.querySelector('#new-voice-list');
    
        var synth = window.speechSynthesis;
        
        setTimeout(() => {
            
            var voices = synth.getVoices();
            
            for (let index = 0; index < voices.length; index++) {
                const voicesElement = voices[index];
    
                var option = document.createElement('option');
                option.textContent = voicesElement.name + ' (' + voicesElement.lang + ')';
                option.value = index;

                voiceSelect.appendChild(option);
            }
            
            inputSpeakBtn.addEventListener('click', function() {
                var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
                utterThis.voice = voices[voiceSelect.value];
                synth.speak(utterThis);
                inputTxt.blur();
            })
        }, 1000);