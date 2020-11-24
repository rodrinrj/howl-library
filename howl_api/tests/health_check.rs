use std::net::TcpListener;

#[actix_rt::test]
async fn healt_check_works() {
    let address = spawn_app();

    let client = reqwest::Client::new();
    let response = client
        .get(&format!("{}/status", &address))
        .send()
        .await
        .expect("Failed to execute request");

    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}

fn spawn_app() -> String {
    let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
    let port = listener.local_addr().unwrap().port();

    let server = howl_api::run(listener).expect("Failed to bind address");
    let _ = tokio::spawn(server);

    format!("http://127.0.0.1:{}", port)
}
