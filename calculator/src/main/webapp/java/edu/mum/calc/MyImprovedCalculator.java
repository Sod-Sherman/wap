package edu.mum.calc;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "improvedCalc", urlPatterns = {"/improvedCalc"})
public class MyImprovedCalculator extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        try {
            String num1 = req.getParameter("num1"),
                    num2 = req.getParameter("num2"),
                    num3 = req.getParameter("num3"),
                    num4 = req.getParameter("num4");
            Double sum = 0.0, product = 0.0;
            if (num1 == null) num1 = "";
            if (num2 == null) num2 = "";
            if (num3 == null) num3 = "";
            if (num4 == null) num4 = "";

            if (!num1.equals("") && !num2.equals("")) {
                sum = Double.parseDouble(num1) + Double.parseDouble(num2);
            }

            if (!num3.equals("") && !num4.equals("")) {
                product = Double.parseDouble(num3) * Double.parseDouble(num4);
            }

            out.print("" +
                    "<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <title>Improved Calculator</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div>\n" +
                    "    <fieldset>\n" +
                    "        <legend>Lab 11 Exercise 2 Improved Calculator</legend>\n" +
                    "        <form action=\"improvedCalc\" method=\"post\">\n" +
                    "            <input type=\"text\" name=\"num1\" pattern=\"[-+]?[\\d]*.?[\\d]*\" placeholder=\"-4.55\" value=\"" + num1 + "\"/>&nbsp; + &nbsp;\n" +
                    "            <input type=\"text\" name=\"num2\" pattern=\"[-+]?[\\d]*.?[\\d]*\" placeholder=\"6.1\" value=\"" + num2 + "\"/>&nbsp; = &nbsp;\n" +
                    "            <input type=\"text\" name=\"sum\" readonly value = \"" + sum + "\"/> <br />\n" +
                    "<br />" +
                    "            <input type=\"text\" name=\"num3\" pattern=\"[-+]?[\\d]*.?[\\d]*\" placeholder=\"-7.16\" value=\"" + num3 + "\" />&nbsp; * &nbsp;\n" +
                    "            <input type=\"text\" name=\"num4\" pattern=\"[-+]?[\\d]*.?[\\d]*\" placeholder=\"8.4\" value=\"" + num4 + "\" />&nbsp; = &nbsp;\n" +
                    "            <input type=\"text\" name=\"product\" readonly value = \"" + product + "\"/> <br />\n" +
                    "            <input type=\"submit\">\n" +
                    "        </form>\n" +
                    "    </fieldset>\n" +
                    "</div>\n" +
                    "</body>\n" +
                    "</html>" +
                    "");


        } catch (Exception e) {
            out.println(e);
        }
        out.close();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
}
