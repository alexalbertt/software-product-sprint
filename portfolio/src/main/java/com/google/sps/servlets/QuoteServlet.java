package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/quote")
public class QuoteServlet extends HttpServlet {
  ArrayList<String> quotes = new ArrayList<>();
  

  public QuoteServlet() { 
    quotes.add("Alright alright alright.");
    quotes.add("There's only one rule in the jungle: when the lion's hungry, he eats!");
    quotes.add("“Number one rule of Wall Street. Nobody... and I don't care if you're Warren Buffet or if you're Jimmy Buffet. Nobody knows if a stock is gonna go up, down, sideways or in circles. Least of all, stockbrokers, right?”");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = new Gson().toJson(quotes);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}
