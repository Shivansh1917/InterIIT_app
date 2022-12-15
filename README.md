<h1>The explanation of the code is as follow</h1>

<h3>The Python Code</h3>
The python code is written in Jupyter with conda interpreter (3.9.13)
The code initially takes the data in csv format and then plot its graph
<b>The ML Algorithm </b>
To get the spikes in the data set (explaining the origin of x-rays) the find_peaks function of the scipy.signal module is used. The values were decided by trial and error. Then the result was plotted. The plot looks something like this
<br>
<img src=".\readmeDataFolder\plot.jpg" alt="plot">
peaks store the time of spikes during in the form of list
<br>
x[peaks] will give us the count
<h4>Limitations of the model</h4>
The files can't be taken as input in direct lc form; the software FV (The one made by NASA) was used to convert the .lc file into .csv file manually and some of those data files are stored in DataSetCSV. 

<h3>The Front End Code</h3>
The front end of the website was developed by react. And it is stored in the folder ISRO<br>
The website was meant to be look like the following figma doc <br>
https://www.figma.com/file/flMTNtaJRLfEwx2KGTP8Ln/INTER-IIT-PS-WebPage?t=5kWWvbJABVR4B5hu-0

Due to some personal reason I wasn't able to properly design the pages and connect it properly. I still tried to make the basic structure of the website as far as possible. Using complete react. The structure of the website is expected to be that of the figma doc.

<h3>The Backend</h3>
Due to same reasons as above I wasn't able to make backend. Still I have a brief idea the this has to be done using flask and by creating a py server.

<h3>The limitations of the application</h3>
<li>
    <ul>The ML algorithm is not able to accept the .lc files one has to convert it manually to csv and then send it here. This is restricting the creation of large amount of data which can be used in the algorithm</ul>
    <ul>Till now not much of the testing has been done of the algorithm but all the results as of now is satisfactory</ul>
    <ul>The data hasn't been classified till yet</ul>
    <ul>The frontend hasn't been completely developed still styling and routing of webpage needs to be done as per the figma doc</ul>
    <ul>The backend isn't developed at all. Hence the data from python can not be send to the react and the form inputs of react can not be send to python</ul>
</li>

<h3>A PROMISE</h3>
<p>I am aware of the fact that I was not able to complete the project as asked for. But I can promise that I have the required skills to be part of the Inter IIT Team. I have learned React upto a good level for my very own project Defi For MSME in the CFI. I was new to the python and ML still was able to make an algorithm which gave great result. And I wasn't able to connect the backend still I believe I have the skills to learn it if time permits. I am willing to contribute time amidst the busy Sem4 for our team to be victorious in Inter IIT</p>


