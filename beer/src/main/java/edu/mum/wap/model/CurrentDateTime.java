package edu.mum.wap.model;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {
    private String color;
    private String size;

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        if(color != null){
             out.write("<span style=\"color: "+color+"; font-size:" +size+ "\">"+getToday()+"</span>");
            System.out.println(color + size);
        }
        else{
            //out.write("<span style=\""+color+"\"; font-size:\"" +size+ "\">"+getToday()+"</span>");
            out.write("<span>" + getToday() + "</span>");
            System.out.println(color + size);
        }

    }

    private String getToday() {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        return ft.format(dNow);
    }
}
