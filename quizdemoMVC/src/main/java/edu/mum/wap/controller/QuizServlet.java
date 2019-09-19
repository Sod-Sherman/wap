package edu.mum.wap.controller;

import edu.mum.wap.model.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/")
public class QuizServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();

        String question = "";
        String answer = req.getParameter("result");
        HttpSession httpSession = req.getSession();
        Quiz quiz = (Quiz) httpSession.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            httpSession.setAttribute("quiz", quiz);
            question = quiz.getNextQuestion().toString();
        } else {
            question = quiz.getNextQuestion().toString();
            quiz.answerCorrectAddScore(answer); //adding score
            System.out.println(answer + " -> " + question);
        }

        if (!quiz.isNextQuestion()) {
            req.setAttribute("size", quiz.getQuestions().size());
            req.getRequestDispatcher("result.jsp").forward(req,resp);

//            resp.sendRedirect("result.jsp");
            //out.print(".");
            httpSession.setAttribute("quiz",null);
            out.close();

        } else {
            req.setAttribute("question", question);
            req.getRequestDispatcher("form.jsp").forward(req, resp);
            //out.print("");
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
}
