# 1. XSS: Cross-Site Scripting(Inject malicious script into a website)

## Types of XSS Vulnerabilities: 
    1. Reflected XSS(AKA Non-Persistent )
    2. Stored XSS(AKA Persistent)
    3. DOM Based XSS()

## Prevention:
    1. Validate and Sanitize the input
    2. Use TextContent instead of innerHTML Prevent DOM XSS
    3. CSP(Content Security Policy)
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' script-self='self'" ></meta>
    
# 2. CSRF(Cross-Site Request Forgery): Tricking users into submitting malicious request(eg unauthorized bank transfers)

## Defenses:
    1. CSRF Token(Server generates a unique token per session)
    2. SameSite Cookie(restrict cross-origin cookie sending)
        Set-Cookie: sessionId=abc123; SameSite=Strict; Secure; HttpOnly
    
# 3. ClickJacking(Overlaying invisible iframes to trick users into clicking malicious elements)
## Prevention:
    1. Header(block iframe embedding):  X-Frame-Option: Deny 
    2. CSP frame-ancestors:   Content-Security-Policy: frame-ancestors 'none'

# 4. Open Redirect Attacks(manipluating URLs to redirect users to phishing sites)
## Prevention:
    1. validate and encode before redirecting URLs(whitelist allowed domains)
    2. use relative paths(avoid full URLs in redirects)

# 5. Brute Force attack
## Prevention:
    1. Rate limiting requests
    2. CAPTCHA(Completely Automated Public Turing test to tell Computers and Human Apart)

# 6. localstorage or Token leakage
## Prevention:
    1. Store sensitive data in httpOnly cookies instead
    2. Avoid storing access_token or JWT in localStorage/sessionStorage
    3. Regenerate tokens periodically
    4. Use Refresh token rotation(per 5 ~ 15 mins)

# 7. Man-In-the-Middle(MITM, attacks intercepts and potentially alters the 
#    the communication between two parties) via public WIFI
    1. Session Hijacking: taking over an authenticated session to impersonate teh user
    2. Evasdropping: stealing login credientials, personal data, credit card numbers
## Prevention:
    1. Always use HTTPS
    2. Validate SSL/TLS certificate on API calls(moblie apps)
    3. VPN: encrypts all traffic from your device to a trusted server

# Replay Attack(captures a valid data transmission and fraudulently retransmits/replay)

## Prevention:
    1. Add timestamp
    2. Add Nonce(Number Useed Once)




https://www.youtube.com/watch?v=z4LhLJnmoZ0 </br>
https://owasp.org/www-community/Types_of_Cross-Site_Scripting </br>
https://owasp.org/www-community/Types_of_Cross-Site_Scripting