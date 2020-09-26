// //Code for Azure Speech to Text

// var subscriptionKey = "81cdc9587dfc4c9084bf437d917639f8";
//     var serviceRegion = "westus"
//     var phraseDiv;
//     var startRecognizeOnceAsyncButton;

//     // subscription key and region for speech services.
//     var languageTargetOptions, languageSourceOptions;
//     var SpeechSDK;
//     var recognizer;

//     document.addEventListener("DOMContentLoaded", function () {
//       startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
//       languageTargetOptions = "en";
//       languageSourceOptions = "en-US";
//       phraseDiv = document.getElementById("phraseDiv");

//       startRecognizeOnceAsyncButton.addEventListener("click", function () {
//         startRecognizeOnceAsyncButton.disabled = true;
//         phraseDiv.innerHTML = "";

//         var speechConfig;
//           if (subscriptionKey === "" || subscriptionKey === "subscription") {
//             alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
//             startRecognizeOnceAsyncButton.disabled = false;
//             return;
//           }
//           speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription(subscriptionKey, serviceRegion);

//         speechConfig.speechRecognitionLanguage = languageSourceOptions;
//         let language = languageTargetOptions
//         speechConfig.addTargetLanguage(language)

//         var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
//         recognizer = new SpeechSDK.TranslationRecognizer(speechConfig, audioConfig);

//         recognizer.recognizeOnceAsync(
//           function (result) {
//             startRecognizeOnceAsyncButton.disabled = false;
//             let translation = result.translations.get(language);
//             window.console.log(translation);
//             phraseDiv.innerHTML += translation;

//             recognizer.close();
//             recognizer = undefined;
//           },
//           function (err) {
//             startRecognizeOnceAsyncButton.disabled = false;
//              phraseDiv.innerHTML += err;
//             window.console.log(err);

//             recognizer.close();
// 	    recognizer = undefined;
//           });
//       });

//       if (!!window.SpeechSDK) {
//         SpeechSDK = window.SpeechSDK;
//         startRecognizeOnceAsyncButton.disabled = false;

//         document.getElementById('content').style.display = 'block';

//       }
//     });

