use actix_web::{web, App, HttpResponse, HttpServer};
use actix_web::dev::Server;
use std::net::TcpListener;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(||
        App::new()
            .route("/status", web::get().to(health_check))
    )
    .listen(listener)?
    .run();

    Ok(server)
}

async fn health_check() -> HttpResponse {
    HttpResponse::Ok().finish()
}
