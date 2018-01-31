# HW8
For this assignment, you will create a “color” slot machine

Create a web page called index.html, with an external JavaScript file and external CSS files.
In the HTML, create a 3 text boxes on the same line (<input type=”text” />
Create a <p id=”msg”> element on the following line
Create 3 CSS classes with 3 distinct background colors for the text boxes, called “one”, “two”, and “three”
Assign each text box one of those CSS classes to change the background color.

For each text box do the following
Use a loop to iterate 10 times and do the following:
Use Math.floor(Math.random() * 10) to generate a random number between 0-9. 
If the number is 0 or exceeds 3, generate another number
If the number generated == 1; assign CSS class “one”
If the number generated == 2; assign CSS class “two”
If the number generated == 3; assign CSS class “three”
	End Loop
End 

If all 3 colors match, change the text in <p id=”msg”> to say “Congratultations, you won!”
If the colors don’t match, change the text in <p id=”msg”> to say “Sorry, try again”


Due: February 2, 2018 9:00 AM

Submission: 
1.	Create “HW8” repository in GitHub where all project files will be stored
2.	Deploy the final solution to www.mydomain.com/HW8.  
3.	Email a publicly accessible link the web site to samnasr@live.com. 
