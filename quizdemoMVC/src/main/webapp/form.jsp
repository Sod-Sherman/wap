<%--
  Created by IntelliJ IDEA.
  User: sdblg
  Date: 9/18/2019
  Time: 2:30 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<html>
<body>
<div style="width: 50%">
    <fieldset>
        <legend>The Number Quiz!</legend>
        <form action="" method="post">
            <p>Your current score is
                <input name="score" type="text" readonly style="border: none" value= "${quiz.score}"/></p>
            <p>Guess next number in the sequence:</p>
            <p><input name="sequences" type="text" readonly style="border: none; width: 50%" value="${question}"/><br/>
                          Your answer is:
                <input name="result" type="text" pattern="[\d]+" style="width: 30px" /><br/>
                <input type="submit"/>
            </p>
        </form>
    </fieldset>
</div>
</body>
</html>
