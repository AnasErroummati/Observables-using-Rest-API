# Observables-using-Rest-API


Develop a Browser-based HTML/JavaScript client that displays the content of the remote shared folder, each n seconds, n being an input parameter.

For simplicity, we will only consider depth 0, i.e., we will ignore the content of subfolders. So, if and only if any file or subfolder directly under the remote shared folder is created, deleted or renamed, then such a change should be tracked and displayed by the client.

More specifically, the end user shall be able to:

--- Input n in a text field

--- Click a button to start receiving remote content updates each n seconds, and update the local content display (inside the browser) accordingly

--- Click the same button, whose caption should have changed from start to stop, to stop receiving remote content updates
