import Head from 'next/head';

function Layout(props ){
  return(
    <div>
       <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        {(props.markUp) ? <script type="application/ld+json" dangerouslySetInnerHTML={{__html:props.markUp}} /> : "" }
        {(props.addMarkUp) ? <script type="application/ld+json" dangerouslySetInnerHTML={{__html:props.addMarkUp}} /> : "" }
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={props.desc} />
        <link rel="stylesheet" href="/static/style.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/responsive.css"/>
        <link rel="stylesheet" href="/static/bootstrap.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.6.2/css/bootstrap-slider.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,900&display=swap" rel="stylesheet" />
        <script src="/static/js/jquery.js"></script>
        <script src="/static/js/popper.js"></script>
        <script src="/static/js/bootstrap.js"></script>
        <script src="/static/js/custom.js"></script>
      </Head>
      {props.children}
    </div>
   
   

  );
}

export default Layout;