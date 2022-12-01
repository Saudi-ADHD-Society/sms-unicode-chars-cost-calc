# SMS Unicode Characters Cost Calculator

A bit of JS and JQuery to display the number of message parts used by a given text message, depending on whether it contains unicode characters, and to calculate the cost of sending bulk messages.

Uses SAR and a per-message cost of 0.20, but easily modifiable.

## SMS message character limits
### Single part messages
A single SMS message using only the Latin alphabet, numbers and basic punctuation will use 7-bit encoding and can be up to 160 characters in length. However, if using Arabic characters or emojis or other extended characters the message will use Unicode encoding and a single message will have a limit of 70 characters.

### Multi-part messages
When the message length exceeds the character limit, the message is split up into multiple separate SMS and sent to the recepients separately. Because they are send separately, an additional tag is added to indicate that they go together, which uses up some of the character limit (7 characters per message part for 7-bit encoding, and 3 characters per message part for Unicode)

|     | Regular SMS | Multipart SMS |
| --- | --- | --- |
| 7-bit | 160 chars | 153 chars |
| Unicode | 70 chars | 67 chars |

## Demo
View a [Demo on Codepen.io](https://codepen.io/jvarn13/pen/dyKqBeO)
