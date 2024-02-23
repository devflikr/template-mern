const {
    PORT,
    IS_HEALTH_CHECK_ENABLED,
    MONGO_USER,
    MONGO_PASS,
    MONGO_URI,
    CRYPTO_SECRET,
    API_DOMAIN,
    API_COOKIE_REGEX,
    MODE,
    BCRYPT_ROUNDS,
} = process.env;

const ENV = {
    port: PORT,
    mode: MODE || "dev",
    domain: API_DOMAIN,
    cookieRegex: API_COOKIE_REGEX,
    bcrypt: BCRYPT_ROUNDS,
    mongo: {
        user: MONGO_USER,
        password: MONGO_PASS,
        uri: MONGO_URI || "",
    },
    is: {
        healthCheckEnabled: IS_HEALTH_CHECK_ENABLED,
    },
    crypto: CRYPTO_SECRET,
};

export default ENV;
