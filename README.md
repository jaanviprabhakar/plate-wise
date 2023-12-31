# plate-wise

A revolutionary food recommendation system leveraging user data and food delivery platform APIs to generate tailored suggestions for optimal food ordering experiences.

URL: https://www.platewise.in

Figma UI-UX: https://www.figma.com/proto/1NYBYnpUblfUmf1rOGCTYE/PlateWise

Project Structure:

<pre>
plate-wise/
│
├── backend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── __init__.py
│   │   │   ├── routes/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── user_routes.py
│   │   │   │   └── ... (other routes)
│   │   │   ├── models/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── user.py
│   │   │   │   └── ... (other models)
│   │   │   └── ... (other backend modules)
│   │   ├── config/
│   │   │   ├── __init__.py
│   │   │   ├── database.py
│   │   │   └── ... (other configurations)
│   │   ├── main.py
│   │   └── ... (other backend files)
│   ├── requirements.txt
│   └── ... (other backend folders/files)
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   └── ... (other React components)
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── ... (other React pages)
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── ... (other service modules)
│   │   ├── styles/
│   │   │   └── ... (CSS, SASS, etc.)
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ... (other frontend files)
│   ├── package.json
│   ├── yarn.lock (or package-lock.json for npm)
│   └── ... (other frontend folders/files)
│
├── .gitignore
├── README.md
└── ... (other project-level files)
</pre>
