# Unintentional Argument Modification in JavaScript

This repository demonstrates a common JavaScript error: unintentional modification of arguments passed to a function.  The `foo` function correctly adds two numbers. However, if `foo` were to modify its input arguments, unexpected side effects could occur within the `bar` function. 

This example showcases a scenario where the arguments are not modified, demonstrating correct behavior.  This is crucial to understand to prevent subtle bugs.