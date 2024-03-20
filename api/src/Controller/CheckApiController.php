<?php declare(strict_types=1);


namespace App\Controller;


use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Route;
use Symfony\Component\HttpFoundation\JsonResponse;


#[Route('/', name: 'api')]
class CheckApiController extends AbstractFOSRestController
{
   #[Get("/apiCheck", name:"get_api_check")]
   public function getApiCheck(): JsonResponse
   {
       return new JsonResponse([
           'status' => "API is ok",
           'code' => '200'
       ]);
   }
}
