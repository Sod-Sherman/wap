package edu.mum.calc;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class MySimpleCalcServlet extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

//        Map<String,String[]> parameterMap = req.getParameterMap();
//        Set s = parameterMap.entrySet();
//        Iterator it = s.iterator();

        PrintWriter out = resp.getWriter();

        try{
            String num1 = req.getParameter("num1");
            String num2 = req.getParameter("num2");
            String num3 = req.getParameter("num3");
            String num4 = req.getParameter("num4");

            if(!num1.equals("") && !num2.equals("")){
                out.print("<p>");
                out.print(num1 + " + " + num2 + " = ");
                out.print(Double.parseDouble(num1) + Double.parseDouble(num2));
                out.print("</p>");
            }

            if(!num3.equals("") && !num4.equals("")){
                out.print("<p>");
                out.print(num3 + " * " + num4 + " = ");
                out.print(Double.parseDouble(num3) * Double.parseDouble(num4));
                out.print("</p>");

            }
            out.print("<a href = \"simple.html\"> Do it again click here");

        } catch (Exception e){
            out.println(e);
        }



    }
}
