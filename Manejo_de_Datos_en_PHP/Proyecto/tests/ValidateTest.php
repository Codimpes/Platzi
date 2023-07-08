<?php

use PHPUnit\Framework\TestCase;
use App\Validate;

class ValidateTest extends TestCase 
{
    public function test_email()
    {
        $email = Validate::email('jeyson.umana@esinergia.co');
        $this->assertTrue($email);
    }

    public function test_url()
    {
        $url = Validate::url('https://platzi.co');
        $this->assertTrue($url);

        $url = Validate::url('platzi.co');
        $this->assertFalse($url);
    }
}